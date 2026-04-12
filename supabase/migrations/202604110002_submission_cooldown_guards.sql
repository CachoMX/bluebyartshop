create or replace function public.enforce_lead_submission_cooldown()
returns trigger
language plpgsql
as $$
begin
  new.email := lower(trim(new.email));

  if not pg_try_advisory_xact_lock(5101, hashtext(new.email)) then
    raise exception 'Lead submission cooldown active.'
      using errcode = '23505';
  end if;

  if exists (
    select 1
    from public.lead_submissions
    where email = new.email
      and created_at >= now() - interval '1 minute'
  ) then
    raise exception 'Lead submission cooldown active.'
      using errcode = '23505';
  end if;

  return new;
end;
$$;

drop trigger if exists enforce_lead_submission_cooldown on public.lead_submissions;
create trigger enforce_lead_submission_cooldown
before insert on public.lead_submissions
for each row
execute function public.enforce_lead_submission_cooldown();

create or replace function public.enforce_contact_submission_cooldown()
returns trigger
language plpgsql
as $$
declare
  submission_key text;
begin
  new.email := lower(trim(new.email));
  submission_key := new.email;

  if not pg_try_advisory_xact_lock(5102, hashtext(submission_key)) then
    raise exception 'Contact submission cooldown active.'
      using errcode = '23505';
  end if;

  if exists (
    select 1
    from public.contact_submissions
    where email = new.email
      and created_at >= now() - interval '1 minute'
  ) then
    raise exception 'Contact submission cooldown active.'
      using errcode = '23505';
  end if;

  return new;
end;
$$;

drop trigger if exists enforce_contact_submission_cooldown on public.contact_submissions;
create trigger enforce_contact_submission_cooldown
before insert on public.contact_submissions
for each row
execute function public.enforce_contact_submission_cooldown();
