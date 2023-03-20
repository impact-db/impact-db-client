import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

// can add Dr. Tang's email to this list if he wants to get emails
const emailList = ["garrett@impact-database.com"];

async function sendAdminEmail({ subject, html }) {
  const d = new Date();
  let timestamp = "emailTime:" + d.toISOString();

  await setDoc(doc(db, "email_collection", timestamp), {
    to: emailList,
    message: {
      subject: subject,
      html: html,
    },
  });
}

async function sendUserEmail({ emailAddress, subject, html }) {
  const d = new Date();
  let timestamp = "emailTime:" + d.toISOString();

  await setDoc(doc(db, "email_collection", timestamp), {
    to: [emailAddress],
    message: {
      subject: subject,
      html: html,
    },
  });
}

export { sendAdminEmail, sendUserEmail };
