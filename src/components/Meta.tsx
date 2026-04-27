import React, { useEffect } from 'react';

interface MetaProps {
  title: string;
  description: string;
}

export default function Meta({ title, description }: MetaProps) {
  useEffect(() => {
    document.title = `${title} | SOBO Logistics - Reliable Global Courier & B2B Solutions`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, [title, description]);

  return null;
}
