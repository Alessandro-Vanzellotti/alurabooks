import React from "react";
import { Card } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Componentes/Card',
    component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = () => <Card />

export const Primario = Template.bind({});