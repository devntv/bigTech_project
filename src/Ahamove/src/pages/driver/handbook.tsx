import { BadRequest } from '@tsed/exceptions';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { driverConfig } from '@/modules/driver/driverConfig';
import { DriverHandbookPage } from '@/modules/driver/DriverHandbookPage';

type Props = {
  // Declare DriverHelpCenterPage props
};

export default function DriverHandbook(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <DriverHandbookPage />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale == undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = driverConfig;
  return {
    props: {
      ...(await serverSideTranslations(locale, i18nNamespaces)),
    },
  };
};
