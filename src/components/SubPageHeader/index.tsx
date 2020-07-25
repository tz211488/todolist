import React from 'react';
import styles from './index.less';


import { MenuFoldOutlined } from '@ant-design/icons';


const SubPageHeader: React.FC<{}> = () => {


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <span className={styles.folderBtn}><MenuFoldOutlined /></span>
                <span>今天</span>
            </div>
            <div className={styles.right}>dsds</div>
        </div>
    )

}

export default SubPageHeader;