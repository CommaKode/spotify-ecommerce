import { PackageDetail } from '@/src/views/packageDetail'
import React from 'react'
import { packageItems } from '@/src/entities/package/constants';
import { notFound } from 'next/navigation';

interface PackageDetailPageProps {
  params: {
    packageId: string;
  };
}

export default function Page({ params }: PackageDetailPageProps) {

  const { packageId } = params;


  // Find the package by id (assuming id is the index of packageItems for simplicity)
  const packageData = packageItems[parseInt(packageId, 10)];

  // If package not found, you can return a 404 page
  if (!packageData) {
    notFound();
  }

  return (
    <><PackageDetail packageData={packageData} /></>
  )
}
