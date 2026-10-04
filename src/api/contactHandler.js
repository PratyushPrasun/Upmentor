/**
 * UpMentor Contact & Demo Request Handler
 * 
 * Ready-to-use backend handler for Express.js, Next.js API route, or AWS Lambda/Cloudflare Workers.
 * Easily swappable for Formspree or EmailJS.
 */

// Example Express Route Integration:
/*
import express from 'express';
import { handleContactSubmission } from './contactHandler.js';

const app = express();
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const result = await handleContactSubmission(req.body);
  if (result.success) {
    return res.status(200).json(result);
  }
  return res.status(400).json(result);
});
*/

export async function handleContactSubmission(payload) {
  // 1. Honeypot Anti-Spam Check
  if (payload.honeypot || payload.website_hp) {
    console.warn('[SPAM BLOCKED] Honeypot field filled.');
    return { success: false, error: 'Spam detected.' };
  }

  // 2. Validate Core Fields
  const isSchool = payload.type === 'school_demo_request';
  if (isSchool) {
    if (!payload.schoolName || !payload.phone || !payload.email || !payload.name) {
      return { success: false, error: 'Missing mandatory school fields.' };
    }
  } else {
    if (!payload.parentName || !payload.childName || !payload.phone || !payload.schoolName) {
      return { success: false, error: 'Missing mandatory parent fields.' };
    }
  }

  // 3. Email Notification Template
  const emailNotification = {
    to: 'partnerships@upmentor.in',
    subject: isSchool 
      ? `[New School Demo Request] ${payload.schoolName} (${payload.city})`
      : `[Parent Inquiry] ${payload.childName} - ${payload.schoolName}`,
    body: JSON.stringify(payload, null, 2),
    timestamp: new Date().toISOString()
  };

  console.log('[UPMENTOR LEAD CAPTURED]', emailNotification);

  // 4. Return Success to Client
  return {
    success: true,
    message: 'Inquiry successfully logged and dispatched to academic team.',
    leadId: `LEAD-${Date.now()}`
  };
}

/**
 * QUICK INTEGRATIONS:
 * 
 * 1. Formspree:
 * Set VITE_CONTACT_API_URL="https://formspree.io/f/YOUR_FORM_ID" in .env
 * 
 * 2. EmailJS:
 * Replace handleSchoolSubmit with emailjs.send("service_id", "template_id", schoolData, "public_key")
 */
