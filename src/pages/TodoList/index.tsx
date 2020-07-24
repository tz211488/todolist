import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { PageHeaderProps } from 'antd/es/page-header';

const SubHeader: React.FC<PageHeaderProps> = (props) => {
    return <div>test</div>
}

const TodayList: React.FC<PageHeaderProps> = () => (
    <PageContainer
        title='hahah'
        pageHeaderRender={SubHeader()}
    >
        <div>sd</div>
    </PageContainer>
)

export default TodayList