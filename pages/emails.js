import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Emails = ({swal}) => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get("/api/emails").then((response) => {
      setEmails(response.data);
    });
  }, []);

  return (
    <Layout>
      <h1 className="text-primary">New Emails</h1>
      <table className="basic">
        <thead>
          <tr>
            <td>Name</td>
            <td>Subject</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {emails.length > 0 &&
            emails.map((email) => (
              <tr key={email._id}>
                <td>{email.name}</td>
                <td>{email.subject}</td>
                <td>
                  <button>
                    <Link
                      className="btn-primary"
                      href={"/emails/view/" + email._id}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Emails;
// <time>{new Date(email.createdAt).toLocaleString("sv-SE")}</time>
