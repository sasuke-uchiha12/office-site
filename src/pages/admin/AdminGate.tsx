import { type FormEvent, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { signInAdmin, signOutAdmin } from "../../lib/catalog/admin";
import { useAdminSession } from "../../hooks/useAdminSession";

export function AdminGate() {
  const { loading, configured, session, isAdmin, error, refresh } = useAdminSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      await signInAdmin(email, password);
      await refresh();
    } catch (caughtError) {
      setSubmitError(caughtError instanceof Error ? caughtError.message : "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    await signOutAdmin();
    await refresh();
  };

  if (!configured) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="admin-shell admin-empty">
            <h1 className="admin-title">Admin</h1>
            <p className="admin-note">
              Supabase is not configured yet. Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to run the admin UI.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="admin-shell admin-empty">
            <p className="admin-note">Checking admin session...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!session) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="admin-auth">
            <div className="admin-auth__card">
              <h1 className="admin-title">Admin Login</h1>
              <p className="admin-note">
                Sign in with your owner account. The account must also exist in the Supabase <code>admin_users</code> table.
              </p>
              <form className="admin-form" onSubmit={handleSignIn}>
                <label className="admin-field">
                  <span>Email</span>
                  <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </label>
                <label className="admin-field">
                  <span>Password</span>
                  <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </label>
                {submitError ? <p className="admin-error">{submitError}</p> : null}
                {error ? <p className="admin-error">{error}</p> : null}
                <button className="admin-button" type="submit" disabled={submitting}>
                  {submitting ? "Signing in..." : "Sign in"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!isAdmin) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="admin-shell admin-empty">
            <h1 className="admin-title">Admin Access Required</h1>
            <p className="admin-note">
              Your account is authenticated but is not listed in <code>admin_users</code>. Add the user ID there to unlock the admin UI.
            </p>
            {error ? <p className="admin-error">{error}</p> : null}
            <button className="admin-button" type="button" onClick={() => void handleSignOut()}>
              Sign out
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="admin-shell">
          <div className="admin-shell__header">
            <div>
              <h1 className="admin-title">Admin</h1>
              <p className="admin-note">Manage products, collection cards, and AVIF image uploads from one place.</p>
            </div>
            <button className="admin-button admin-button--ghost" type="button" onClick={() => void handleSignOut()}>
              Sign out
            </button>
          </div>
          <div className="admin-shell__nav">
            <NavLink className={({ isActive }) => `admin-tab${isActive ? " is-active" : ""}`} to="/admin/products">
              Products
            </NavLink>
            <NavLink className={({ isActive }) => `admin-tab${isActive ? " is-active" : ""}`} to="/admin/collections">
              Collections
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
