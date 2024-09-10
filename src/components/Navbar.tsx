import Link from "next/link";
import React, { useState } from "react";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">nextmap</div>
        <div className="navbar__list">
          <Link href={"/stores"} className="navbar__list--item">
            맛집 목록
          </Link>
          <Link href={"/stores/new"} className="navbar__list--item">
            맛집 등록
          </Link>
          <Link href={"/user/likes"} className="navbar__list--item">
            찜한 가게
          </Link>
          <Link href={"/user/login"} className="navbar__list--item">
            로그인
          </Link>
        </div>
        {/* mobile button */}
        <div
          role="presentation"
          className="navbar__button"
          onClick={() => setIsOpen((val) => !val)}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
        {/* mobile navbar */}
        {isOpen && (
          <div className="navbar--mobile">
            <div className="navbar__list--mobile">
              <Link href={"/stores"} className="navbar__list--item--mobile">
                맛집 목록
              </Link>
              <Link href={"/stores/new"} className="navbar__list--item--mobile">
                맛집 등록
              </Link>
              <Link href={"/user/likes"} className="navbar__list--item--mobile">
                찜한 가게
              </Link>
              <Link href={"/user/login"} className="navbar__list--item--mobile">
                로그인
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
