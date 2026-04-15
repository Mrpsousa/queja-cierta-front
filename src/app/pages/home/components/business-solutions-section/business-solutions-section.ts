import { ChangeDetectionStrategy, Component } from '@angular/core';

interface BusinessSolutionCard {
  title: string;
  features: string[];
  linkText: string;
  link: string;
}

@Component({
  selector: 'app-business-solutions-section',
  standalone: true,
  templateUrl: './business-solutions-section.html',
  styleUrl: './business-solutions-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessSolutionsSectionComponent {
  readonly cards: BusinessSolutionCard[] = [
    {
      title: 'Personaliza tu pagina',
      features: [
        'Ten el sello de verificacion de Queja Cierta.',
        'Genera confianza para quien busca tu empresa.',
        'Personaliza la pagina con tu identidad.',
      ],
      linkText: 'Conoce QC Brand Page',
      link: '#',
    },
    {
      title: 'Reviews para e-commerce',
      features: [
        'Aumenta la confianza y conversion de tu e-commerce.',
        'Potencializa tus ingresos con reviews.',
        'Tus productos en la primera pagina de busqueda organica.',
      ],
      linkText: 'Conoce QC Reviews',
      link: '#',
    },
    {
      title: 'Gestiona tus reclamaciones',
      features: [
        'Gana agilidad con gestion centralizada.',
        'Administra Queja Cierta, redes sociales y otros canales.',
        'Genera reportes y automatiza flujos de atencion.',
      ],
      linkText: 'Conoce QC HugMe',
      link: '#',
    },
    {
      title: 'Queja Cierta en tu CRM',
      features: [
        'Responde reclamaciones con tu herramienta CRM.',
        'Optimiza tu atencion al cliente.',
        'Integra reclamaciones y clientes a tu sistema.',
      ],
      linkText: 'Conoce QC API',
      link: '#',
    },
    {
      title: 'Anunciate en Queja Cierta',
      features: [
        'Aparece para quien busca tu producto o servicio.',
        'Aumenta la visibilidad de tu empresa.',
        'Fortalece confianza y credibilidad en tu marca.',
      ],
      linkText: 'Conoce QC Ads',
      link: '#',
    },
    {
      title: 'Cursos de Queja Cierta',
      features: [
        'Contenido enfocado en confianza y reputacion.',
        'Aprende sobre atencion al cliente de excelencia.',
      ],
      linkText: 'Conoce QC Educa',
      link: '#',
    },
  ];
}
