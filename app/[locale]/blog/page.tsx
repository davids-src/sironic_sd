import { BlogList } from '@/components/BlogList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - SIRONIC Rendszerház',
  description:
    'IT tippek, tanácsok és szakmai cikkek kisvállalkozásoknak. Tudj meg többet az adatbiztonságról, hálózatokról és IT karbantartásról.',
};

export default function BlogPage() {
  return <BlogList />;
}
