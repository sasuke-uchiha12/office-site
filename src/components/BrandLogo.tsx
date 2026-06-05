import { Link } from "react-router-dom";

type BrandLogoProps = {
  to?: string;
  className?: string;
};

export function BrandLogo({ to = "/", className }: BrandLogoProps) {
  return (
    <Link to={to} className={className ?? "brand-logo"} aria-label="Home">
      <img src="/icon8535.png" alt="Eco" />
    </Link>
  );
}
