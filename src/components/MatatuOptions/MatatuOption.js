import React from 'react';
import { Wrapper, Content, PDFButton, AddButton, ViewButton, SearchInput } from './MatatuOptions.styles';
import { useAppContext } from '../../context/AppContextProvider';
import { useMatatuContext } from '../../context/MatatuContextProvider';



//services
import generatePDF from '../../services/matatusPDFGenerator';

const MatatuOption = () => {
   const {toggleView, view, toggleWaiting} = useAppContext();
   const { matatus, searchChange, searchTerm } = useMatatuContext();
   
   let viewMessage = '';
   view === 'card' ? viewMessage = 'Table View' : viewMessage = 'Card View';

  return (
    <Wrapper>
        <Content>
            <PDFButton onClick={e => generatePDF(matatus)}>Generate PDF</PDFButton>
            <AddButton onClick={e => toggleWaiting()}>Add to Waiting</AddButton>
            <ViewButton onClick={e => toggleView()}>{viewMessage}</ViewButton>
            <SearchInput placeholder='Search...' onChange={searchChange}/>
        </Content>
    </Wrapper>
  );
}

export default MatatuOption;