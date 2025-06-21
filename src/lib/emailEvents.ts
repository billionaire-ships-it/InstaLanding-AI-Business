import { sendEmail } from "./email";

type EmailAction =
  | "welcome"
  | "trial-reminder"
  | "plan-upgrade"
  | "certificate";

interface EmailPayload {
  to: string;
  name?: string;
  downloadUrl?: string;
}

export async function handleEmailEvent(
  action: EmailAction,
  payload: EmailPayload
) {
  const { to, name = "there", downloadUrl } = payload;

  switch (action) {
    case "welcome":
      return await sendEmail({
        to,
        subject: "🎉 Welcome to InstaLanding AI!",
        html: `<h1>Welcome, ${name}!</h1><p>You now have access to the world's most powerful landing page builder. <a href="https://yourapp.com/dashboard">Launch Now</a></p>`,
      });

    case "trial-reminder":
      return await sendEmail({
        to,
        subject: "⏰ Your Trial Ends in 2 Days!",
        html: `<p>Hi ${name},<br>Your InstaLanding AI trial ends in <strong>2 days</strong>. <a href="https://yourapp.com/upgrade">Upgrade now</a> to keep building!</p>`,
      });

    case "plan-upgrade":
      return await sendEmail({
        to,
        subject: "✅ Your Plan Has Been Upgraded",
        html: `<p>Awesome, ${name}!<br>Your upgraded plan is now active. <a href="https://yourapp.com/dashboard">Access your full dashboard here</a>.</p>`,
      });

    case "certificate":
      if (!downloadUrl) throw new Error("Missing download URL for certificate email.");
      return await sendEmail({
        to,
        subject: "🎓 Your Certificate is Ready",
        html: `<p>Congrats, ${name}!<br>Your InstaLanding AI certificate is ready. <a href="${downloadUrl}">Download Now</a>.</p>`,
      });

    default:
      throw new Error("Unknown email action type.");
  }
}
