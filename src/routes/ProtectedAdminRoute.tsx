import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export const ProtectedAdminRoute = ({ children }: any) => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/admin/login" />;

  return children;
};
