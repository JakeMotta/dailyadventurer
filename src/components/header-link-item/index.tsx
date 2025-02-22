import React from 'react';
import './index.scss';

export const HeaderLinkItem = ({ title, icon, active, onClick }: { title: string, icon: React.ReactNode, active: boolean, onClick: () => void }) => {
    return (
        <div className='header-link-item flex flex-col justify-center h-full px-4 cursor-pointer' onClick={onClick}>
            <div className='flex flex-row mt-1'>
                <div className='flex pr-2'>
                    {icon}
                </div>
                <div className='flex '>
                    {title}
                </div>
            </div>
            <div className={`header-link-bar flex w-full h-[2px] bg-gray-600 opacity-0 transition-opacity duration-100 ${active ? 'opacity-100' : ''}`} />
        </div>
    );
};
