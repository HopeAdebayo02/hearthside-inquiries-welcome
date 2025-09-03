const { Resend } = require('resend');

// CORS helper
const corsHeaders = (origin) => ({
  'Access-Control-Allow-Origin': origin || '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
});

exports.handler = async (event) => {
  const origin = event.headers && (event.headers.origin || event.headers.Origin);

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: corsHeaders(origin),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const {
      name,
      email,
      phone,
      relationship,
      careType,
      timeframe,
      preferredContact,
      message,
    } = data;

    const missing = [];
    if (!name) missing.push('name');
    if (!email) missing.push('email');
    if (!phone) missing.push('phone');
    if (!message) missing.push('message');
    if (missing.length > 0) {
      return {
        statusCode: 400,
        headers: corsHeaders(origin),
        body: JSON.stringify({ error: 'Missing required fields', missing }),
      };
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return {
        statusCode: 500,
        headers: corsHeaders(origin),
        body: JSON.stringify({ error: 'Email service not configured.' }),
      };
    }

    const resend = new Resend(resendApiKey);
    const toEmail = process.env.TO_EMAIL || 'Hope.adebayo02@gmail.com';

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Relationship:</strong> ${relationship || '—'}</p>
        <p><strong>Care Type:</strong> ${careType || '—'}</p>
        <p><strong>Timeframe:</strong> ${timeframe || '—'}</p>
        <p><strong>Preferred Contact:</strong> ${preferredContact || '—'}</p>
        <hr/>
        <p style="white-space: pre-wrap"><strong>Message:</strong><br/>${(message || '').replace(/</g,'&lt;')}</p>
      </div>
    `;

    await resend.emails.send({
      from: 'Goshen Inquiries <onboarding@resend.dev>',
      to: toEmail,
      reply_to: email,
      subject: `New inquiry from ${name}`,
      html,
    });

    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: 'Failed to send email', details: String(err && err.message || err) }),
    };
  }
};


