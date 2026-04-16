import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentCardComponent, SegmentItem } from '../segment-card/segment-card';
import { SegmentsControlsComponent } from '../segments-controls/segments-controls';

interface Segment {
  title: string;
  count: number;
  items: SegmentItem[];
}

@Component({
  selector: 'app-segments-grid',
  standalone: true,
  imports: [CommonModule, SegmentCardComponent, SegmentsControlsComponent],
  templateUrl: './segments-grid.html',
  styleUrl: './segments-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentsGridComponent implements AfterViewInit {
  private readonly hostElement = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly viewMode = signal<'grid' | 'list'>('grid');
  readonly expandAll = signal(false);

  private readonly columnCount = signal(3);

  readonly renderedColumns = computed(() => {
    if (this.viewMode() === 'list') {
      return [this.segments];
    }

    return this.buildColumns(this.columnCount());
  });

  readonly segments: Segment[] = [
    {
      title: 'Agencias de Atención y Servicios',
      count: 7,
      items: [
        { title: 'Agencias de Modelos' },
        { title: 'Call Centers y Servicios de Atención' },
        { title: 'Consultorías de RRHH' },
        { title: 'Empresas de Cobranza' },
        { title: 'Plataformas de Contratación de Servicios' },
        { title: 'Plataformas de Empleo y Reclutamiento' },
        { title: 'Formación Profesional' },
      ],
    },
    {
      title: 'Alimentos y Bebidas',
      count: 22,
      items: [{ title: 'Restaurantes y Delivery' }],
    },
    {
      title: 'Apuestas',
      count: 8,
      items: [{ title: 'Casas de Apuestas' }],
    },
    {
      title: 'Salud y Bienestar',
      count: 6,
      items: [{ title: 'Clínicas y Consultorios' }],
    },
    {
      title: 'Comercio Minorista',
      count: 12,
      items: [{ title: 'Tiendas Físicas' }],
    },
    {
      title: 'Tecnología',
      count: 9,
      items: [{ title: 'Soluciones SaaS' }],
    },
    {
      title: 'Servicios Financieros',
      count: 5,
      items: [{ title: 'Bancos y Fintechs' }],
    },
    {
      title: 'Educación',
      count: 10,
      items: [{ title: 'Cursos y Plataformas' }],
    },
    {
      title: 'Transporte y Logística',
      count: 7,
      items: [{ title: 'Flete y Entregas' }],
    },
    {
      title: 'Construcción',
      count: 4,
      items: [{ title: 'Materiales y Obras' }],
    },
    {
      title: 'Inmobiliario',
      count: 6,
      items: [{ title: 'Agentes Inmobiliarios y Propiedades' }],
    },
    {
      title: 'Energía',
      count: 3,
      items: [{ title: 'Generadores y Proveedores' }],
    },
    {
      title: 'Turismo y Ocio',
      count: 8,
      items: [{ title: 'Agencias y Hoteles' }],
    },
    {
      title: 'Moda y Belleza',
      count: 5,
      items: [{ title: 'Prendas y Salones' }],
    },
    {
      title: 'Automotriz',
      count: 9,
      items: [{ title: 'Concesionarios' }],
    },
    {
      title: 'Agropecuaria',
      count: 4,
      items: [{ title: 'Granjas e Insumos' }],
    },
    {
      title: 'Medios y Entretenimiento',
      count: 6,
      items: [{ title: 'Productoras y Canales' }],
    },
    {
      title: 'Jurídico',
      count: 3,
      items: [{ title: 'Despachos de Abogados' }],
    },
    {
      title: 'Seguros',
      count: 4,
      items: [{ title: 'Corredoras y Aseguradoras' }],
    },
    {
      title: 'Recursos Humanos',
      count: 5,
      items: [{ title: 'Reclutamiento y Selección' }],
    },
    {
      title: 'Marketing y Publicidad',
      count: 7,
      items: [{ title: 'Agencias de Marketing' }],
    },
    {
      title: 'Investigación y Desarrollo',
      count: 2,
      items: [{ title: 'I+D' }],
    },
    {
      title: 'Limpieza y Conservación',
      count: 3,
      items: [{ title: 'Servicios de Limpieza' }],
    },
    {
      title: 'Eventos',
      count: 6,
      items: [{ title: 'Organización de Eventos' }],
    },
  ];

  constructor() {
    // Ensure each segment has the correct number of items (mock if necessary)
    this.segments.forEach((s) => {
      const current = s.items?.length ?? 0;
      const needed = s.count - current;
      for (let i = 0; i < needed; i++) {
        s.items.push({ title: `${s.title} — Categoría ${current + i + 1}` });
      }
    });
  }

  ngAfterViewInit(): void {
    this.updateColumnCount();

    const observer = new ResizeObserver(() => this.updateColumnCount());
    observer.observe(this.hostElement.nativeElement);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  onExpandAll(value: boolean): void {
    this.expandAll.set(value);
  }

  onViewMode(mode: 'grid' | 'list') {
    this.viewMode.set(mode);
    this.updateColumnCount();
  }

  private buildColumns(columnCount: number): Segment[][] {
    const columns: Segment[][] = Array.from({ length: columnCount }, () => []);

    this.segments.forEach((segment, index) => {
      columns[index % columnCount].push(segment);
    });

    return columns;
  }

  private updateColumnCount(): void {
    if (this.viewMode() === 'list') {
      this.columnCount.set(1);
      return;
    }

    const width = this.hostElement.nativeElement.getBoundingClientRect().width;
    const nextCount = width >= 980 ? 3 : width >= 620 ? 2 : 1;
    this.columnCount.set(nextCount);
  }
}
