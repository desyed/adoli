"use client";
import { getAllLibraryTemplates } from "@/lib/services/library.service";
import { useEffect, useState } from "react";
import CampaignCardSkeleton from "../../campaigns/components/CampaignCardSkeleton";
import {PopupInterface} from "@/interfaces/popup.interface";

const LibraryList = () => {
  const [library, setLibrary] = useState<PopupInterface[] | any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLibraries = async () => {
      setLoading(true);
      const libraries = await getAllLibraryTemplates();
      console.log(libraries)
      setLibrary(libraries);
      setLoading(false);
    };
    fetchLibraries();
  }, []);
  return (
    <div className="campaigns-list flex-wrap py-8 flex items-center justify-start gap-3">
      {loading && (
        <>
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
        </>
      )}
      {library.map((lib: any, i: number) => (
        <div key={i} className="w-[350px] bg-secondary/10 p-3 pb-2 rounded-lg">
          <img src={lib?.img_url} className="rounded-lg" alt="" />
          <div className="mt-2">{lib?.name}</div>
        </div>
      ))}
    </div>
  );
};

export default LibraryList;
