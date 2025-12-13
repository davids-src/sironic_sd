'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getLocalizedPath } from '@/lib/routes';
import { Locale } from '@/i18n';

export default function PrivacyPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';
  const privacyPath = getLocalizedPath('privacy', locale as Locale);

  const sections = t('privacyPage.sections', []);

  return (
    <>
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumbs items={[{ label: t('privacyPage.title'), href: `/${locale}/${privacyPath}` }]} />
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                {t('privacyPage.title')}
              </h1>
              <p className="text-muted-foreground mb-2">{t('privacyPage.effectiveDate')}</p>
              <p className="text-muted-foreground">{t('privacyPage.website')}</p>
            </div>

            {/* Data Controller */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.dataController.title}</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>{sections.dataController.name}</p>
                <p>{sections.dataController.businessName}</p>
                <p>{sections.dataController.address}</p>
                <p>{sections.dataController.email}</p>
                <p>{sections.dataController.phone}</p>
                <p className="mt-4">{sections.dataController.note}</p>
              </div>
            </div>

            {/* Principles */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.principles.title}</h2>
              <p className="text-muted-foreground mb-4">{sections.principles.description}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {sections.principles.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Data Scope */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.dataScope.title}</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">{sections.dataScope.contactData.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {sections.dataScope.contactData.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">{sections.dataScope.technicalData.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {sections.dataScope.technicalData.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{sections.dataScope.cookies.title}</h3>
                <p className="text-muted-foreground">{sections.dataScope.cookies.description}</p>
              </div>
            </div>

            {/* Purpose and Legal Basis */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.purpose.title}</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 p-3 text-left font-semibold">
                        {sections.purpose.table.purpose}
                      </th>
                      <th className="border border-gray-300 dark:border-gray-700 p-3 text-left font-semibold">
                        {sections.purpose.table.legalBasis}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-3">{sections.purpose.table.contact}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3">{sections.purpose.table.contactBasis}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-3">{sections.purpose.table.website}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3">{sections.purpose.table.websiteBasis}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-3">{sections.purpose.table.security}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3">{sections.purpose.table.securityBasis}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-3">{sections.purpose.table.cookies}</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-3">{sections.purpose.table.cookiesBasis}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Retention */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.retention.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {sections.retention.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Processors */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.processors.title}</h2>
              <p className="text-muted-foreground mb-4">{sections.processors.description}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                {sections.processors.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">{sections.processors.note}</p>
            </div>

            {/* Transfer */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.transfer.title}</h2>
              <p className="text-muted-foreground mb-4">{sections.transfer.description}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                {sections.transfer.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">{sections.transfer.conclusion}</p>
            </div>

            {/* Rights */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.rights.title}</h2>
              <p className="text-muted-foreground mb-4">{sections.rights.description}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                {sections.rights.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="font-semibold mb-2">{sections.rights.authority.title}</p>
                <p className="text-muted-foreground">{sections.rights.authority.name}</p>
                <p className="text-muted-foreground">{sections.rights.authority.address}</p>
              </div>
            </div>

            {/* Security */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.security.title}</h2>
              <p className="text-muted-foreground mb-4">{sections.security.description}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {sections.security.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Modification */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.modification.title}</h2>
              <p className="text-muted-foreground">{sections.modification.description}</p>
            </div>

            {/* Contact */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4">{sections.contact.title}</h2>
              <p className="text-muted-foreground mb-4">{sections.contact.description}</p>
              <p className="text-muted-foreground">{sections.contact.email}</p>
              <p className="text-muted-foreground">{sections.contact.phone}</p>
            </div>

            {/* Compliance */}
            <div className="mb-12 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <p className="text-muted-foreground">{sections.compliance.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
