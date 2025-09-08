import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  // items: [{name:'หน้าแรก', href:'/'}, {name:'บริการ', href:'/services'}, {name:'รับยิงแอดสายเทา'}]
  return (
    <nav aria-label="Breadcrumb" className="container breadcrumb">
      {items.map((it, i) => (
        <span key={i}>
          {it.href ? <Link href={it.href}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
          {i < items.length - 1 ? ' › ' : ''}
        </span>
      ))}
    </nav>
  );
}
