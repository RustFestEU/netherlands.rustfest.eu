import React from 'react';

export default function MailChimpSubscriptionForm() {
  return (
    <form
      className="formInput"
      action="https://asquera.us13.list-manage.com/subscribe/post"
      method="POST"
    >
      <input type="hidden" value="7945052bc1ecc432bff53c079" name="u" />
      <input type="hidden" value="5929ff51d6" name="id" />
      <div className="group">
        <input
          type="email"
          name="EMAIL"
          required=""
          placeholder="your.email@example.org"
        />
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
}
