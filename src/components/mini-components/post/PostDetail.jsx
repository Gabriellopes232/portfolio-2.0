/* eslint-disable @next/next/no-img-element */
import React from 'react';

import moment from 'moment';

const PostDetail = ({ post }) => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                <div className="px-4 lg:px-0">
                    <div className="flex items-center mb-8 w-full">
                        <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post?.author?.name}</p>
                        </div>
                        <div className="font-medium text-gray-700">
                            <span className="align-middle">{moment(post?.createdAt).format('MMM DD, YYYY')}</span>
                        </div>
                    </div>
                    <h1 className="mb-8 text-3xl font-semibold">{post?.title}</h1>
                </div>
            </div>

        </>
    );
};

export default PostDetail;
