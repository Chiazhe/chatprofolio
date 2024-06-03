"use client";

import { redirect, useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Sidebar = ({}: Props) => {
  const router = useRouter();
  const params = useParams();

  return (
    <div className="w-[200px]">
      <button
        onClick={() => {
          router.push(`/profile/${params.username}/update/education`);
        }}
      >
        Update Education
      </button>
      <button
        onClick={() => {
          router.push(`/profile/${params.username}/update/experience`);
        }}
      >
        Update Experience
      </button>
      <button
        onClick={() => {
          router.push(`/profile/${params.username}/update/achievement`);
        }}
      >
        Update Achievement
      </button>
      <button
        onClick={() => {
          router.push(`/profile/${params.username}/update/basic-information`);
        }}
      >
        Update Basic Information
      </button>
      <button
        onClick={() => {
          router.push(`/profile/${params.username}/update/contact`);
        }}
      >
        Update Contact
      </button>
      <button
        onClick={() => {
          router.push(`/profile/${params.username}/update/project`);
        }}
      >
        Update Project
      </button>
      <button
        onClick={() => {
          router.push(`/profile/${params.username}/update/skill`);
        }}
      >
        Update Skill
      </button>
    </div>
  );
};

export default Sidebar;
