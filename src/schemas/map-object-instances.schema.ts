import { Type, querySyntax, Static } from '@feathersjs/typebox';

// Main data model schema
export const mapObjectInstancesSchema = Type.Object(
  {
    id: Type.String({ format: 'uuid' }),
    userId: Type.String({ format: 'uuid' }), // todo validate reference
    tenancierId: Type.String({ format: 'uuid' }), // todo validate reference

    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),

    name: Type.Object({
      en: Type.String(),
      cn: Type.String()
    }),
    mapId: Type.String({ format: 'uuid' }),
    mapObjectId: Type.String({ format: 'uuid' }),
    mapObjectInstanceId: Type.Union([Type.String({ format: 'uuid' }), Type.Null()]), // always null no trees in cag

    // https://rs0spmr9q6.feishu.cn/sheets/shtcn4NHlX5kziPRp6zm9yYwxue?sheet=FZ3h71
    property_geojson: Type.Object({
      geojson: Type.Any(),
    }),
    property_name: Type.Object({
      name: Type.String(),
    }),
    property_shop: Type.Object({
      logo: Type.String(),
      description: Type.String(),
    }),
    property_building: Type.Object({
      floors: Type.Array(Type.String()),
      default_floor: Type.String(),
    }),
    property_floor: Type.Object({
      building_parent: Type.String(),
      is_default_floor: Type.Boolean(),
    }),
  },
  { $id: 'MapObjectInstances', additionalProperties: false }
);
export type MapObjectInstances = Static<typeof mapObjectInstancesSchema>;

// Schema for creating new entries
export const mapObjectInstancesDataSchema = Type.Pick(
  mapObjectInstancesSchema,
  ['userId', 'tenancierId', 'createdAt', 'updatedAt', 'name', 'mapId', 'mapObjectId', 'mapObjectInstanceId'],
  {
    $id: 'MapObjectInstancesData',
    additionalProperties: true
  }
);
export type MapObjectInstancesData = Static<typeof mapObjectInstancesDataSchema>;

// Schema for allowed query properties
export const mapObjectInstancesQueryProperties = Type.Pick(
  mapObjectInstancesSchema,
  ['userId', 'tenancierId', 'createdAt', 'updatedAt', 'name', 'mapId', 'mapObjectId', 'mapObjectInstanceId'],
  {
    additionalProperties: false
  }
);
export const mapObjectInstancesQuerySchema = querySyntax(mapObjectInstancesQueryProperties);
export type MapObjectInstancesQuery = Static<typeof mapObjectInstancesQuerySchema>;
