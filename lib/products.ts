/**
 * Products Data File
 *
 * This file contains all product information for the "Termékeink" (Our Products) page.
 *
 * HOW TO ADD A NEW PRODUCT:
 * 1. Copy one of the existing product objects
 * 2. Update the following fields:
 *    - id: unique identifier (lowercase, no spaces)
 *    - name: Product display name
 *    - description: 1-2 sentence description of the product
 *    - features: Array of key features (strings)
 *    - link: External or internal URL (optional - use null if no link)
 *    - icon: Lucide icon name to use (optional - defaults to 'Package')
 * 3. Add the new object to the products array
 * 4. Save the file - the page will automatically display the new product
 *
 * Example:
 * {
 *   id: 'new-product',
 *   name: 'Új Termék',
 *   description: 'Rövid leírás az új termékről...',
 *   features: [
 *     'Első funkció',
 *     'Második funkció',
 *     'Harmadik funkció'
 *   ],
 *   link: 'https://example.com',
 *   icon: 'Zap'
 * }
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  link?: string | null;
  icon?: string;
}

export const products: Product[] = [
  {
    id: 'minden-cegnek-legyen-informatikusa',
    name: '🧩 Minden cégnek legyen informatikusa',
    description:
      'Költséghatékony, infrastruktúrára optimalizált IT szolgáltatás, amellyel a vállalkozásod úgy működik, mintha saját informatikusa lenne – csak fix havidíjért.',
    features: [
      'Folyamatos rendszermonitorozás',
      'Proaktív karbantartás és beavatkozás',
      'Infrastruktúra-fejlesztési tanácsadás',
      'Biztonsági mentések és frissítések',
      'Személyes, magyar nyelvű támogatás',
    ],
    link: '/minden-cegnek-legyen-informatikusa',
    icon: 'Briefcase',
  },
  {
    id: 'tdarts',
    name: 'TDarts',
    description:
      'Teljesítmény- és folyamatkövető rendszer, amely segíti a csapatokat az átlátható és hatékony munkavégzésben.',
    features: [
      'Feladat- és státuszkezelés',
      'Teljesítménymérés és riportolás',
      'Testreszabható munkafolyamatok',
    ],
    link: 'https://tdarts.sironic.hu',
    icon: 'Target',
  },
  {
    id: 'cloud-suite',
    name: 'Cloud Suite',
    description:
      'Privát felhőmegoldás fájlmegosztásra, naptárra és biztonságos vállalati kollaborációra.',
    features: [
      'Biztonságos fájlmegosztás',
      'Csoportos naptár',
      'Dokumentum együttműködés',
      'Mobil hozzáférés',
    ],
    link: 'https://sironic.hu/cloudsuite',
    icon: 'Cloud',
  },
  {
    id: 'it-partner-portal',
    name: 'IT Partner Portal',
    description:
      'Ügyfélszolgálati és karbantartási felület, amely átlátható hibabejelentést és státuszkövetést biztosít.',
    features: [
      'Ticket rendszer',
      'Valós idejű státusz',
      'Dokumentáció és előzmények',
    ],
    link: null,
    icon: 'Users',
  },
  {
    id: 'crm-pro',
    name: 'CRM Pro',
    description:
      'Egyedi fejlesztésű ügyfélkezelő rendszer, amely átláthatóvá teszi az értékesítési folyamatokat és automatizálja az adminisztrációt.',
    features: [
      'Testreszabható modulok',
      'Értékesítési automatizálás',
      'ERP/e-mail/weboldal integráció',
      'Valós idejű riportok',
    ],
    link: '/kapcsolat?subject=CRM%20Pro',
    icon: 'BarChart3',
  },
];
