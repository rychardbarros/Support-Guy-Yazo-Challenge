import { ModelType } from 'App/Shared/Interfaces/BaseInterface'
import Tag from '../Models/Tag'

export const TagsDefault: Array<ModelType<typeof Tag>> = [
    {
        title: 'Tag 1',
        color: '#FF0000'
    },
    {
        title: 'Tag 2',
        color: '#00FF00'
    },
    {
        title: 'Tag 3',
        color: '#0000FF'
    },
]