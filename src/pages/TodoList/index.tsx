import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { PageContainerProps } from '@ant-design/pro-layout/lib/PageContainer';
import { PageHeaderProps } from 'antd/es/page-header';

import SubPageHeader from '@/components/SubPageHeader'

const SubHeader: React.FC<PageContainerProps> = (props) => {
    return <SubPageHeader />
}

const TodayList: React.FC<PageHeaderProps> = () => (
    <PageContainer
        title='hahah'
        pageHeaderRender={SubHeader}
    >
        <div>sd</div>
    </PageContainer>
)

export default TodayList