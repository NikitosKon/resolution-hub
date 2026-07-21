"use client";

import { FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function AdminLoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");

    const email = login.includes("@")
      ? login.trim().toLowerCase()
      : `${login.trim().toLowerCase()}@resolutionhub.net`;
    const supabase = createSupabaseBrowserClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError("Не удалось войти. Проверьте логин и пароль.");
      setBusy(false);
      return;
    }

    window.location.assign("/admin");
  }

  return (
    <main id="main" className="admin-page">
      <section className="admin-shell admin-login-shell">
        <p className="eyebrow">Resolution Hub</p>
        <h1>Вход в админку</h1>
        <p>Доступ только для владельца проекта.</p>
        <form className="admin-login-form" onSubmit={submit}>
          <label>
            Логин
            <input
              autoComplete="username"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              required
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          {error ? <p className="admin-form-error">{error}</p> : null}
          <button className="button primary" type="submit" disabled={busy}>
            {busy ? "Входим…" : "Войти"}
          </button>
        </form>
      </section>
    </main>
  );
}
