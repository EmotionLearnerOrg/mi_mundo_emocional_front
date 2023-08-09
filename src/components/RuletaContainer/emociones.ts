import {
  AlegriaGuia,
  AlegriaReal,
  TristezaGuia,
  TristezaReal,
  SorpresaGuia,
  SorpresaReal,
  EnojoGuia,
  EnojoReal,
  CalmaGuia,
  CalmaReal,
} from '../../../assets';

export enum emocionesEnum {
  ALEGRIA = 'Alegria',
  TRISTEZA = 'Tristeza',
  SORPRESA = 'Sorpresa',
  ENOJO = 'Enojo',
  CALMA = 'Calma',
}

export type EmocionesTypeNames = `${emocionesEnum}`;

export type emocionType = {
  color: string;
  name: string;
  pathReal: any;
  pathGuia: any;
  pathMonstruo: any;
  pathOpciones: any;
};

export const emociones: {[K in emocionesEnum]: emocionType} = {
  [emocionesEnum.ALEGRIA]: {
    color: '#FDFF49',
    name: emocionesEnum.ALEGRIA,
    pathGuia: AlegriaGuia,
    pathReal: AlegriaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Alegria/monstruo_feliz.png'),
    pathOpciones: require('./../../../assets/ilustraciones/Alegria/opciones/1.png'),
  },
  [emocionesEnum.TRISTEZA]: {
    color: '#65ADFC',
    name: emocionesEnum.TRISTEZA,
    pathGuia: TristezaGuia,
    pathReal: TristezaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Tristeza/monstruo_triste.png'),
    pathOpciones: require('./../../../assets/ilustraciones/Tristeza/opciones/1.png'),
  },
  [emocionesEnum.SORPRESA]: {
    color: '#BBBBBB',
    name: emocionesEnum.SORPRESA,
    pathGuia: SorpresaGuia,
    pathReal: SorpresaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Sorpresa/monstruo_sorprendido.png'),
    pathOpciones: require('./../../../assets/ilustraciones/Sorpresa/opciones/1.png'),
  },
  [emocionesEnum.ENOJO]: {
    color: '#FC4D4A',
    name: emocionesEnum.ENOJO,
    pathGuia: EnojoGuia,
    pathReal: EnojoReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Enojo/monstruo_enojado.png'),
    pathOpciones: require('./../../../assets/ilustraciones/Enojo/opciones/1.png'),
  },
  [emocionesEnum.CALMA]: {
    color: '#88EA5A',
    name: emocionesEnum.CALMA,
    pathGuia: CalmaGuia,
    pathReal: CalmaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Calma/monstruo_calmado.png'),
    pathOpciones: require('./../../../assets/ilustraciones/Calma/opciones/1.png'),
  },
};
