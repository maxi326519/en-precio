import { Property, PropertyError } from "../../../../../interfaces/Property";

import Input from "../../../../../components/Inputs/Input";
import Checkbox from "../../../../../components/Inputs/Checkbox";

import styles from "./Step2.module.css";
import Steps from "../../../../../components/Steps/Steps";

interface Props {
  property: Property;
  error: PropertyError;
  onChange: (property: Property, error: PropertyError) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2({
  property,
  error,
  onBack,
  onNext,
  onChange,
}: Props) {
  // Change property data
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    onChange(
      { ...property, [event.target.name]: event.target.value },
      { ...error, [event.target.name]: "" }
    );
  }

  return (
    <div>
      <Steps step={2} />
      <form className={styles.form} onSubmit={onNext}>
        <div className={styles.flex}>
          <Input
            name="predisposicion"
            label="Predisposicion"
            value={property.predisposicion}
            error={error.predisposicion}
            onChange={handleChange}
          />
          <Input
            name="orientacion"
            label="Orientacion"
            value={property.orientacion}
            error={error.orientacion}
            onChange={handleChange}
          />
          <div className={styles.checkGrid}>
            <Checkbox
              name="profecionales"
              value={property.caracteristicas.profecionales}
              label="profecionales"
              handleCheck={handleChange}
            />
            <Checkbox
              name="pscina"
              value={property.caracteristicas.pscina}
              label="pscina"
              handleCheck={handleChange}
            />
            <Checkbox
              name="parrilla"
              value={property.caracteristicas.parrilla}
              label="parrilla"
              handleCheck={handleChange}
            />
            <Checkbox
              name="comercial"
              value={property.caracteristicas.comercial}
              label="comercial"
              handleCheck={handleChange}
            />
            <Checkbox
              name="gimnasio"
              value={property.caracteristicas.gimnasio}
              label="gimnasio"
              handleCheck={handleChange}
            />
            <Checkbox
              name="salaJuegos"
              value={property.caracteristicas.salaJuegos}
              label="salaJuegos"
              handleCheck={handleChange}
            />
            <Checkbox
              name="mascotas"
              value={property.caracteristicas.mascotas}
              label="mascotas"
              handleCheck={handleChange}
            />
            <Checkbox
              name="discapacidad"
              value={property.caracteristicas.discapacidad}
              label="discapacidad"
              handleCheck={handleChange}
            />
            <Checkbox
              name="hidromasaje"
              value={property.caracteristicas.hidromasaje}
              label="hidromasaje"
              handleCheck={handleChange}
            />
            <Checkbox
              name="solarium"
              value={property.caracteristicas.solarium}
              label="solarium"
              handleCheck={handleChange}
            />
            <Checkbox
              name="alarma"
              value={property.caracteristicas.alarma}
              label="alarma"
              handleCheck={handleChange}
            />
            <Checkbox
              name="vigilancia"
              value={property.caracteristicas.vigilancia}
              label="vigilancia"
              handleCheck={handleChange}
            />
            <Checkbox
              name="aireAcondicionado"
              value={property.caracteristicas.aireAcondicionado}
              label="aireAcondicionado"
              handleCheck={handleChange}
            />
            <Checkbox
              name="cladera"
              value={property.caracteristicas.cladera}
              label="cladera"
              handleCheck={handleChange}
            />
            <Checkbox
              name="cocinaEquipada"
              value={property.caracteristicas.cocinaEquipada}
              label="cocinaEquipada"
              handleCheck={handleChange}
            />
            <Checkbox
              name="lavavajillas"
              value={property.caracteristicas.lavavajillas}
              label="lavavajillas"
              handleCheck={handleChange}
            />
            <Checkbox
              name="calefaccion"
              value={property.caracteristicas.calefaccion}
              label="calefaccion"
              handleCheck={handleChange}
            />
            <Checkbox
              name="frigobar"
              value={property.caracteristicas.frigobar}
              label="frigobar"
              handleCheck={handleChange}
            />
            <Checkbox
              name="microondas"
              value={property.caracteristicas.microondas}
              label="microondas"
              handleCheck={handleChange}
            />
            <Checkbox
              name="amoblado"
              value={property.caracteristicas.amoblado}
              label="amoblado"
              handleCheck={handleChange}
            />
            <Checkbox
              name="cancha"
              value={property.caracteristicas.cancha}
              label="cancha"
              handleCheck={handleChange}
            />
            <Checkbox
              name="lavarropas"
              value={property.caracteristicas.lavarropas}
              label="lavarropas"
              handleCheck={handleChange}
            />
            <Checkbox
              name="quincho"
              value={property.caracteristicas.quincho}
              label="quincho"
              handleCheck={handleChange}
            />
            <Checkbox
              name="sauna"
              value={property.caracteristicas.sauna}
              label="sauna"
              handleCheck={handleChange}
            />
            <Checkbox
              name="secarropas"
              value={property.caracteristicas.secarropas}
              label="secarropas"
              handleCheck={handleChange}
            />
            <Checkbox
              name="termotanque"
              value={property.caracteristicas.termotanque}
              label="termotanque"
              handleCheck={handleChange}
            />
          </div>
          <div className={styles.aditionals}>
            <Input
              name="orientacion"
              label="orientacion"
              type="number"
              value={property.adicionales.orientacion}
              onChange={handleChange}
            />
            <Input
              name="plantas"
              label="plantas"
              type="number"
              value={property.adicionales.plantas}
              onChange={handleChange}
            />
            <Input
              name="largoTerreno"
              label="largoTerreno"
              type="number"
              value={property.adicionales.largoTerreno}
              onChange={handleChange}
            />
            <Input
              name="supSemicubierta"
              label="supSemicubierta"
              type="number"
              value={property.adicionales.supSemicubierta}
              onChange={handleChange}
            />
            <Input
              name="frenteTerreno"
              label="frenteTerreno"
              type="number"
              value={property.adicionales.frenteTerreno}
              onChange={handleChange}
            />
            <Input
              name="FOT"
              label="FOT"
              type="number"
              value={property.adicionales.FOT}
              onChange={handleChange}
            />
            <Input
              name="coberturaCochera"
              label="coberturaCochera"
              type="number"
              value={property.adicionales.coberturaCochera}
              onChange={handleChange}
            />
          </div>
          <div className={styles.btnContainer}>
            <button type="button" className="btn btn-success" onClick={onBack}>
              Volver
            </button>
            <button type="submit" className="btn btn-success">
              Continuar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
