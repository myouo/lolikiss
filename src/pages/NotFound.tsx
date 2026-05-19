import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import { EmptyState, PageShell } from '../components/SoftUI';
import { useI18n } from '../i18n/useI18n';

export const NotFound = () => {
  const { t } = useI18n();

  return (
    <PageShell size="narrow" className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full">
        <EmptyState title={t('notFound.title')}>
          {t('notFound.copy')}
        </EmptyState>
        <div className="mt-6 flex justify-center">
          <Link to="/" className="vn-choice flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            <ArrowLeft className="h-4 w-4" />
            {t('notFound.back')}
            <Sparkles className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
};
