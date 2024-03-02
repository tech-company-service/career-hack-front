import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import React, { useState } from 'react';
import Modal from 'react-modal';

const LoggedInUserInfo: React.FC = () => {
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!session) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4">
      <button onClick={() => setIsModalOpen(true)}>
        <Image
          src={session.user?.image ?? `/default-profile.png`}
          alt={session.user?.name ?? 'Profile image'}
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="User Menu"
        className="absolute mt-12 py-2 w-48 bg-white rounded-md shadow-xl z-50 right-10"
      >
        <div className="flex flex-col items-center mt-5">
          <button
            onClick={() => {}}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <img src="/account_circle.svg" alt="Info" className="mr-2 w-4 h-4" />
            マイページ
          </button>
          <button
            onClick={() => {signOut(); setIsModalOpen(false);}}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            <img src="/logout.svg" alt="Info" className="mr-2 w-4 h-4" />
            ログアウト
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LoggedInUserInfo;
