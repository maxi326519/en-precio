export interface Property {
  id?: string;
  tipo: PropertyType;
  titulo: string;
  descripcion: string;
  ubicacion: string;
  calidad: PropertyQuality;
  estado: PropertyState;
  supDescubierta: number;
  supCubierta: number;
  dormitorios: number;
  price: number;
  videoUrl: string;
  video360Url: string;
  predisposicion: PropertyPosition;
  orientacion: PropertyOrientation;
  img: PropertyImg[];
  caracteristicas: {
    profecionales: boolean;
    pscina: boolean;
    parrilla: boolean;
    comercial: boolean;
    gimnasio: boolean;
    salaJuegos: boolean;
    mascotas: boolean;
    discapacidad: boolean;
    hidromasaje: boolean;
    solarium: boolean;
    alarma: boolean;
    vigilancia: boolean;
    aireAcondicionado: boolean;
    cladera: boolean;
    cocinaEquipada: boolean;
    lavavajillas: boolean;
    calefaccion: boolean;
    frigobar: boolean;
    microondas: boolean;
    amoblado: boolean;
    cancha: boolean;
    lavarropas: boolean;
    quincho: boolean;
    sauna: boolean;
    secarropas: boolean;
    termotanque: boolean;
  };
  adicionales: {
    orientacion: number;
    plantas: number;
    largoTerreno: number;
    supSemicubierta: number;
    frenteTerreno: number;
    FOT: number;
    coberturaCochera: number;
  };
}

export interface PropertyImg {
  url: string;
  path: string;
}

export enum PropertyType {
  CASA = "Casa",
  DEPARTAMENTO = "Departamento",
  TERRENO = "Terreno",
}

export enum PropertyQuality {
  PREMIUM = "Premium",
}

export enum PropertyState {
  EN_USO = "En uso",
}

export enum PropertyPosition {
  FRENTE = "Frente",
}

export enum PropertyOrientation {
  NORTE = "Norte",
  SUR = "Sur",
  OESTE = "Oeste",
  ESTE = "Este",
}

export interface PropertyError {
  titulo: string;
  descripcion: string;
  ubicacion: string;
  calidad: string;
  estado: string;
  supDescubierta: string;
  supCubierta: string;
  dormitorios: string;
  price: string;
  predisposicion: string;
  orientacion: string;
  videoUrl: string;
  video360Url: string;
  img: string;
}

export const initProperty = (): Property => ({
  tipo: PropertyType.DEPARTAMENTO,
  titulo: "",
  descripcion: "",
  ubicacion: "",
  calidad: PropertyQuality.PREMIUM,
  estado: PropertyState.EN_USO,
  supDescubierta: 0,
  supCubierta: 0,
  dormitorios: 0,
  price: 0,
  predisposicion: PropertyPosition.FRENTE,
  orientacion: PropertyOrientation.ESTE,
  videoUrl: "",
  video360Url: "",
  img: [],
  caracteristicas: {
    profecionales: false,
    pscina: false,
    parrilla: false,
    comercial: false,
    gimnasio: false,
    salaJuegos: false,
    mascotas: false,
    discapacidad: false,
    hidromasaje: false,
    solarium: false,
    alarma: false,
    vigilancia: false,
    aireAcondicionado: false,
    cladera: false,
    cocinaEquipada: false,
    lavavajillas: false,
    calefaccion: false,
    frigobar: false,
    microondas: false,
    amoblado: false,
    cancha: false,
    lavarropas: false,
    quincho: false,
    sauna: false,
    secarropas: false,
    termotanque: false,
  },
  adicionales: {
    orientacion: 0,
    plantas: 0,
    largoTerreno: 0,
    supSemicubierta: 0,
    frenteTerreno: 0,
    FOT: 0,
    coberturaCochera: 0,
  },
});

export const initPropertyError = (): PropertyError => ({
  titulo: "",
  descripcion: "",
  ubicacion: "",
  calidad: "",
  estado: "",
  supDescubierta: "",
  supCubierta: "",
  dormitorios: "",
  price: "",
  predisposicion: "",
  orientacion: "",
  videoUrl: "",
  video360Url: "",
  img: "",
});
