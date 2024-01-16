import styles from './boardPage.module.scss';
import Title from '../../components/Title/Title.jsx';
import Board from '../../components/Projects/Board.jsx';
import cardBackground from '../../assets/images/background-project.png';
import { BoardService } from '../../api/services/board.js';
import { useEffect, useState } from 'react';
import { authorizationThunk } from '../../store/slices/auth.slice.js';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsThunk } from '../../store/slices/board.slice.js';




const data = [
   {
      id: 1,
      image: cardBackground,
      title: 'Project 1',
      description: 'Project 1 description here. It`s project is very buetiful and fun. And i can use him'
   },
   {
      id: 2,
      image: cardBackground,
      title: 'Project 2',
      description: 'Project 1 description here. It`s project is very buetiful and fun. And i can use him'
   },
   {
      id: 3,
      image: cardBackground,
      title: 'Project 3',
      description: 'Project 1 description here. It`s project is very buetiful and fun. And i can use him'
   },
   {
      id: 4,
      image: cardBackground,
      title: 'Project 4',
      description: 'Project 1 description here. It`s project is very buetiful and fun. And i can use him'
   },
   {
      id: 5,
      image: cardBackground,
      title: 'Project 5',
      description: 'Project 1 description here. It`s project is very buetiful and fun. And i can use him'
   },
   {
      id: 6,
      image: cardBackground,
      title: 'Project 6',
      description: 'Project 1 description here. It`s project is very buetiful and fun. And i can use him'
   },
   {
      id: 7,
      image: cardBackground,
      title: 'Project 7',
      description: 'Project 1 description here. It`s project is very buetiful and fun. And i can use him'
   }
];

const BoardPage = () => {
   const dispatch = useDispatch();

   //doc: State variables
   const [boardData, setBoardData] = useState(useSelector((state) => state.board));
   console.log(boardData);

   useEffect(() => {
      const getBoardData = async () => {
         try {
            await dispatch(getProjectsThunk());
         }
         catch (error) {
            console.log(error);
         }
      };
      getBoardData();
   }, []);

   const handleSubmit = async (values) => {
      console.log(values);
      try {
         await dispatch(authorizationThunk({
            username: values.nickname, password: values.password
         }));
      }
      catch (error) {
         console.log(error);
      }
   };
   return (
   <div className={styles.boardPage}>
      <div className='container'>
         <Title>Your projects</Title>
         <Board boardData={data} />
      </div>
   </div>
   );
};
export default BoardPage;