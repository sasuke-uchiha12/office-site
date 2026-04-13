import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { checkIsAdmin, getAdminSession } from "../lib/catalog/admin";
import { hasSupabaseConfig } from "../lib/supabase/client";

type AdminSessionState = {
  loading: boolean;
  configured: boolean;
  session: Session | null;
  isAdmin: boolean;
  error: string | null;
  refresh: () => Promise<void>;
};

export function useAdminSession(): AdminSessionState {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    if (!hasSupabaseConfig) {
      setSession(null);
      setIsAdmin(false);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const currentSession = await getAdminSession();
      setSession(currentSession);

      if (!currentSession?.user?.id) {
        setIsAdmin(false);
        return;
      }

      const adminStatus = await checkIsAdmin(currentSession.user.id);
      setIsAdmin(adminStatus);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unable to validate admin session.");
      setSession(null);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void refresh();
  }, []);

  return {
    loading,
    configured: hasSupabaseConfig,
    session,
    isAdmin,
    error,
    refresh,
  };
}
