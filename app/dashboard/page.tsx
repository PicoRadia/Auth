import { Navbar } from '@/app/components/Navbar'
import { prisma } from '@/lib/prisma'
import React from 'react'
import { Card, CardTitle, CardHeader } from '../components/ui/card';
import { auth } from "@/app/auth"

async function getProject() {
  const project = await prisma.leaderboard_project.findUnique({
    where: { project_id: 11977669 },
  });
  return project;
}

const page = async () => {
  const session = await auth();
  const project = await getProject();

  return (
    <div>
      <Navbar/>
      
      <div className="pt-24 px-4">
        <h2 className="text-3xl font-bold">Hi, Welcome back {session?.user?.name?.split(' ')[0]}👋</h2>
        
        <h1 className='text-2xl font-bold py-20'>{project?.project_name}</h1>
        <Card>
          <CardHeader>
            <CardTitle>{project?.project_name}</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <Card>
          <CardHeader>
            <CardTitle>{project?.project_name}</CardTitle>
          </CardHeader>
        </Card>
      </div>
    
  )
}

export default page