-- 1. tdocs_companies (업체 정보 & 도장/로고)
CREATE TABLE IF NOT EXISTS public.tdocs_companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  company_name TEXT NOT NULL,
  ceo_name TEXT NOT NULL,
  biz_number TEXT,
  phone TEXT NOT NULL,
  address TEXT,
  logo_url TEXT,
  seal_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. tdocs_customers (고객 주소록)
CREATE TABLE IF NOT EXISTS public.tdocs_customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  address TEXT,
  memo TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. tdocs_recipes (품목 레시피)
CREATE TABLE IF NOT EXISTS public.tdocs_recipes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID,
  title TEXT NOT NULL,
  category TEXT DEFAULT '일반',
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. tdocs_forms (생성된 서식 문서)
CREATE TABLE IF NOT EXISTS public.tdocs_forms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id UUID,
  doc_number TEXT NOT NULL,
  form_type TEXT NOT NULL DEFAULT '견적서',
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_address TEXT,
  supply_amount NUMERIC NOT NULL DEFAULT 0,
  vat_amount NUMERIC NOT NULL DEFAULT 0,
  total_amount NUMERIC NOT NULL DEFAULT 0,
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  status TEXT DEFAULT 'pending',
  signed_at TIMESTAMPTZ,
  signature_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Enable RLS and create public policies
ALTER TABLE public.tdocs_companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tdocs_customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tdocs_recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tdocs_forms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can select tdocs_companies" ON public.tdocs_companies FOR SELECT USING (true);
CREATE POLICY "Anyone can insert tdocs_companies" ON public.tdocs_companies FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can select tdocs_customers" ON public.tdocs_customers FOR SELECT USING (true);
CREATE POLICY "Anyone can insert tdocs_customers" ON public.tdocs_customers FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can select tdocs_recipes" ON public.tdocs_recipes FOR SELECT USING (true);
CREATE POLICY "Anyone can insert tdocs_recipes" ON public.tdocs_recipes FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can select tdocs_forms" ON public.tdocs_forms FOR SELECT USING (true);
CREATE POLICY "Anyone can insert tdocs_forms" ON public.tdocs_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update tdocs_forms" ON public.tdocs_forms FOR UPDATE USING (true) WITH CHECK (true);
