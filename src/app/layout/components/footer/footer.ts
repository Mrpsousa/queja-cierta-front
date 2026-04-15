import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterGroup {
  title: string;
  primaryAction?: FooterLink;
  primaryActionVariant?: 'solid' | 'outline';
  links: FooterLink[];
  noteText?: string;
  noteLink?: FooterLink;
  showStoreBadges?: boolean;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly groups: FooterGroup[] = [
    {
      title: 'Para consumidores',
      primaryAction: { label: 'Area del consumidor', href: '#' },
      primaryActionVariant: 'solid',
      links: [
        { label: 'Hacer una reclamacion', href: '#' },
        { label: 'Mis reclamaciones', href: '#' },
        { label: 'Comparar empresas', href: '#' },
        { label: 'Mejores empresas', href: '#' },
        { label: 'Buscar descuentos', href: '#' },
        { label: 'Rankings', href: '#' },
        { label: 'Registrar una empresa', href: '#' },
      ],
      showStoreBadges: true,
    },
    {
      title: 'Para empresas',
      primaryAction: { label: 'Area de empresas', href: '#' },
      primaryActionVariant: 'solid',
      links: [
        { label: 'Por que estar en Queja Cierta?', href: '#' },
        { label: 'Registrar empresa', href: '#' },
        { label: 'Responder reclamaciones', href: '#' },
        { label: 'Mis productos en Queja Cierta', href: '#' },
      ],
      noteText: 'Ingresa a tu area privada para administrar respuestas de consumidores,',
      noteLink: { label: 'accede aqui', href: '#' },
    },
    {
      title: 'Sobre Queja Cierta',
      links: [
        { label: 'Institucional', href: '#' },
        { label: 'Contactanos', href: '#' },
        { label: 'QC Educa', href: '#' },
        { label: 'Conoce la extension', href: '#' },
        { label: 'Premio', href: '#' },
        { label: 'Blog QC', href: '#' },
      ],
    },
    {
      title: 'Centro de ayuda',
      primaryAction: { label: 'Reclamar de una empresa', href: '#' },
      primaryActionVariant: 'outline',
      links: [
        { label: 'Quiero cambiar mi contrasena', href: '#' },
        { label: 'No encontre una empresa', href: '#' },
        { label: 'Reclame y aun no responden', href: '#' },
        { label: 'Quiero registrar una empresa', href: '#' },
        { label: 'Hablar con Queja Cierta', href: '#' },
      ],
    },
  ];

  readonly socialLinks: FooterLink[] = [
    { label: 'Facebook', href: '#' },
    { label: 'X', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ];

  readonly legalLinks: FooterLink[] = [
    { label: 'Terminos de uso', href: '#' },
    { label: 'Politica de privacidad', href: '#' },
  ];
}
