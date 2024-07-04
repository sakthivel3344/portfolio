import React from 'react'
import styles from "./index.module.scss";
import MainLayout from '@/layouts/mainLayout/mainLayout';

const Education = () => {
  return (
    <div>Education</div>
  )
}

Education.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Education;