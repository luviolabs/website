import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Luvio Labs home">
      <span className="logo-mark" aria-hidden="true">
        <Image
          src="/assets/image.png"
          alt=""
          width={120}
          height={28}
          style={{
            width: "auto",
            height: "100%",
            objectFit: "contain",
          }}
          priority
        />
      </span>
    </Link>
  );
}

