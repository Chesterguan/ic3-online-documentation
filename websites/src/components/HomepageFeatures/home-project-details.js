
import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import HomeCards from './home-cards';
import ItemShowBox from './item-show-box';

import Data from "../../datas/homepage-data"


const HomeProjectDetail = ({ title }) => {
    const [open, setOpen] = useState(false);

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const Datafilter = Data.filter((item) =>
        item.Title == { title }

    )
    console.log(title)

    const Listcur = [
        { name: 'idealist-xai', link: '/docs/projects/idealist-xai' },
        { name: 'chrorus', link: '/docs/projects/chrorus' },
    ]

    console.dir(Datafilter)


    const ProjectsArray = Data.map((tempData) => {
        if (tempData.Title === 'Projects') {
            return (
                <Popover
                    content={<ItemShowBox Title={title} List={tempData.List} />}
                    title={title}
                    trigger="click"
                    open={open}
                    placement="bottomLeft"
                    onOpenChange={handleOpenChange}
                >

                    <Button >Show {title}</Button>
                </Popover>
            );
        }
        return null;
    });


    

    const DatasetArray = Data.map((tempData) => {
        if (tempData.Title === 'Datasets') {
            return (
                <Popover
                    content={<ItemShowBox Title={title} List={tempData.List} />}
                    title={title}
                    trigger="click"
                    open={open}
                    placement="bottom"
                    // arrowPointAtCenter
                    onOpenChange={handleOpenChange}
                >

                    <Button >Show {title}</Button>
                </Popover>
            );
        }
        return null;
    });


    const WorkspaceArray = Data.map((tempData) => {
        if (tempData.Title === 'Workspace') {
            return (
                <Popover
                    content={<ItemShowBox Title={title} List={tempData.List} />}
                    title={title}
                    trigger="click"
                    open={open}
                    placement="bottomRight"
                    onOpenChange={handleOpenChange}
                >

                    <Button >Show {title}</Button>
                </Popover>
            );
        }
        return null;
    });

    return (

        <div>


        {title == "Projects" && ProjectsArray}
        {title == "Datasets" && DatasetArray}
        {title == "Workspaces" && WorkspaceArray}

        </div>

    );
};

export default HomeProjectDetail;