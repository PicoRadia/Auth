import { Navbar } from '@/app/components/Navbar'
import { prisma } from '@/lib/prisma'
import React from 'react'

import { auth } from "@/app/auth"
import OverViewPage from './_Components/overview';

async function getProject() {
  const project = await prisma.leaderboard_project.findUnique({
    where: { project_id: 11977669 },
  });
  return project;
}

const page = async () => {
  const project = await getProject();

  return (
    <div>
      <Navbar/>
      <div className="mt-24 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <OverViewPage/>
      </div>
    </div>
  )
}

export default page