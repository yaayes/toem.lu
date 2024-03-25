import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      {/* <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br /> */}
      <b>{children}</b>
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Luxembourg" invert={invert}>
          56 rue de la victoire
          <br />
          8047 Strassen, Luxembourg.
          <br />
          <u>TVA LU34919649</u>
        </Office>
      </li>
    </ul>
  )
}
