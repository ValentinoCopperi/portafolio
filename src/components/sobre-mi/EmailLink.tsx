import { EmailOutlined } from '@mui/icons-material';
import React from 'react'

interface Props {
    email: string
}

export default function EmailLink({ email }: Props) {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className="flex items-center py-2 mx-3">
            <a
                href={`mailto:${email}`}
                onClick={handleClick}
                className="flex items-center hover:text-blue-600 transition-colors"
            >
                <EmailOutlined className="text-[#bb87f3]" />
                <span className="ml-1">Email</span>
                <span className="mx-2">:</span>
                <span className='underline'>{email}</span>
            </a>
        </div>
    )
}
