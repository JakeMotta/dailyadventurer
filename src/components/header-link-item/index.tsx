import React from 'react';

export const HeaderLinkItem = ({ title, icon, active, onClick }: { title: string, icon: React.ReactNode, active: boolean, onClick: () => void }) => {
    return (
        <div className='flex flex-col justify-center h-full px-4 hover:bg-gray-300 transition-colors duration-300 cursor-pointer' onClick={onClick}>

            <div className='flex flex-row'>
                <div className='flex pr-2'>
                    {icon}
                </div>
                <div className='flex '>
                    {title}
                </div>
            </div>
            <div className='flex w-full h-[2px] bg-gray-600 transition-opacity duration-300' style={{ opacity: active ? 1 : 0 }} />
        </div>
    );
};
