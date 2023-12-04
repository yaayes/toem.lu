import { cx } from '@/lib/cx';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Container } from './Container';

const tiers = [
  {
    name: 'Formule Essentielle',
    id: 'tier-hobby',
    href: '#',
    description: "The perfect plan if you're just getting started with our product.",
    features: [
      'Obtenez des conseils pour prendre des photos attrayantes de votre propriété.',
      'Rédigez une description efficace pour mettre en valeur les atouts de votre bien.',
      'Bénéficiez d’une assistance par e-mail pour toutes vos questions'
    ],
    featured: false,
  },
  {
    name: 'Formule Premium',
    id: 'tier-enterprise',
    href: '#',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Tous les avantages de la Formule Essentielle.',
      'Profitez d’un service de nettoyage professionnel avant les visites pour une présentation impeccable de votre bien.',
      'Recevez un accompagnement personnalisé pour vous guider tout au long du processus de vente.',
    ],
    featured: true,
  },
]

export default function Pricing() {
  return (
    <Container className="mt-16">
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="mt-2 text-4xl font-medium tracking-tight text-amber-400 sm:text-5xl font-display [text-wrap:balance]">
            Nos Formules
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Avec ces deux formules, Toem.lu vous permet de vendre votre maison ou appartement par vous-même au Luxembourg en vous offrant une assistance et des services adaptés à vos besoins. Choisissez la formule qui vous convient le mieux pour une vente réussie en toute simplicité !
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={cx(
                tier.featured ? 'relative bg-amber-400 shadow-2xl sm:px-10 sm:py-20' : 'bg-white/60 sm:mx-8 lg:mx-0 sm:p-10',
                tier.featured
                  ? ''
                  : tierIdx === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-8 ring-1 ring-amber-900/10'
              )}
            >
              <h3
                id={tier.id}
                className={cx(
                  tier.featured ? 'font-bold text-lg' : 'text-base',
                  'font-semibold leading-7 text-black'
                )}
              >
                {tier.name}
              </h3>
              {/* <p className="text-gray-600 mt-6 text-base leading-7">
                {tier.description}
              </p> */}
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 sm:mt-10 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={cx(tier.featured ? 'text-black' : 'text-gray-800', 'h-6 w-5 flex-none')}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={cx(
                  tier.featured
                    ? 'bg-black text-white shadow-sm hover:bg-gray-800 focus-visible:outline-gray-800'
                    : 'text-black ring-1 ring-inset ring-black hover:ring-gray-300 focus-visible:outline-black',
                  'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                )}
              >
                Contactez-nous
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}