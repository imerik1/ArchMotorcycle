import { SectionStyles, Motos, Moto } from "./styles";
export const Section = () => {
  return (
    <SectionStyles id='intro'>
      <Motos>
        <Moto>
          <div id='imagem'>
            <img
              width='100%'
              src='\assets\home-1s-side-min.jpg'
              alt='Arch 1s'
            />
          </div>
          <div id='description'>
            <h1>Arch 1s</h1>
            <h2>SIMPLE. ELEGANT. EFFICIENT.</h2>
            <p>
              The 1s is the first production single sided swing-arm motorcycle
              from ARCH. This new model is sport influenced with a more
              aggressive riding position while still keeping hold of its
              performance cruiser formulation. CNC Machined Aluminum and
              extensive use of Carbon Fiber flow within the lines of this
              elegant yet race inspired motorcycle. As with all ARCH
              motorcycles, the 1s can be custom tailored to its owner.
            </p>
          </div>
        </Moto>
        <Moto id='inverso'>
          <div id='imagem'>
            <img
              width='100%'
              src='\assets\home-method-side-min.jpg'
              alt='Arch 1s'
            />
          </div>
          <div id='description'>
            <h1>Arch Method 143</h1>
            <h2>PRECISION ENGINEERING</h2>
            <p>
              The Method 143 is the first concept production motorcycle
              featuring a carbon fiber mono-cell chassis. The unique layering
              design concept and elegant craftsmanship of the bodywork include
              fine leather, carbon fiber and artfully programmed CNC machined
              aluminum. This progressively designed motorcycle will be limited
              to only 23 units.
            </p>
          </div>
        </Moto>
      </Motos>
    </SectionStyles>
  );
};
