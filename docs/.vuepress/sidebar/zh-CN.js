/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = [
  {
    title: "下载",
    directoryPath: "downloads/",
    children: ["downloads"],
    sidebarDepth: 1,
  },
  {
    title: "编译与部署",
    directoryPath: "installing/",
    children: ["compilation", "install-deploy", "upgrade"],
  },
  {
    title: "开始使用",
    directoryPath: "getting-started/",
    children: [
      "basic-usage",
      "advance-usage",
      "best-practice",
      "data-partition",
      "data-model-rollup",
      "hit-the-rollup",
    ],
  },
  {
    title: "操作手册",
    directoryPath: "administrator-guide/",
    children: [
      {
        title: "数据导入",
        directoryPath: "load-data/",
        children: [
          "load-manual",
          "broker-load-manual",
          "stream-load-manual",
          "routine-load-manual",
          "insert-into-manual",
          "spark-load-manual",
          "delete-manual",
          "load-json-format",
        ],
        sidebarDepth: 2,
      },
      {
        title: "表结构变更",
        directoryPath: "alter-table/",
        children: [
          "alter-table-bitmap-index",
          "alter-table-rollup",
          "alter-table-schema-change",
          "alter-table-temp-partition",
        ],
        sidebarDepth: 2,
      },
      {
        title: "物化视图",
        directoryPath: "materialized-view/",
        children: [],
        sidebarDepth: 2,
      },
      {
        title: "HTTP API",
        directoryPath: "http-actions/",
        children: [
          "cancel-label",
          "compaction-action",
          "fe-get-log-file",
          "get-load-state",
          "restore-tablet",
          "profile-action",
          "connection-action",
          "query-detail-action",
          "show-data-action",
        ],
        sidebarDepth: 1,
      },
      {
        title: "运维操作",
        directoryPath: "operation/",
        children: [
          "disk-capacity",
          "metadata-operation",
          "monitor-alert",
          "multi-tenant",
          "tablet-meta-tool",
          "tablet-repair-and-balance",
          "tablet-restore-tool",
          {
            title: "监控项",
            directoryPath: "monitor-metrics/",
            children: [
              "fe-metrics",
              "be-metrics",
            ],
          },
        ],
        sidebarDepth: 2,
      },
      {
        title: "配置文件",
        directoryPath: "config/",
        children: [
          "fe_config",
          "be_config",
          "user_property",
        ],
        sidebarDepth: 1,
      },
      "backup-restore",
      "broker",
      "colocation-join",
      "dynamic-partition",
      "export-manual",
      "outfile",
      "privilege",
      "resource-management",
      "running-profile",
      "segment-v2-usage",
      "small-file-mgr",
      "sql-mode",
      "time-zone",
      "variables",
    ],
    sidebarDepth: 1,
  },
  {
    title: "扩展功能",
    directoryPath: "extending-doris/",
    children: [
      "audit-plugin",
      "doris-on-es",
      "plugin-development-manual",
      "spark-doris-connector",
      "logstash",
      {
        title: "UDF",
        directoryPath: "udf/",
        children: [
          "user-defined-function",
          "contribute-udf",
          {
            title: "用户贡献的 UDF",
            directoryPath: "contrib/",
            children:[
                "udaf-orthogonal-bitmap-manual",
            ],
          },          
        ],
      },
    ],
  },
  {
    title: "设计文档",
    directoryPath: "internal/",
    children: [
      "doris_storage_optimization",
      "grouping_sets_design",
      "metadata-design",
      "spark_load",
    ],
  },
  {
    title: "SQL 手册",
    directoryPath: "sql-reference/",
    children: [
      {
        title: "SQL 函数",
        directoryPath: "sql-functions/",
        children: [
          {
            title: "日期函数",
            directoryPath: "date-time-functions/",
            children: [
              "convert_tz",
              "curdate",
              "current_timestamp",
              "curtime",
              "date_add",
              "date_format",
              "date_sub",
              "datediff",
              "day",
              "dayname",
              "dayofmonth",
              "dayofweek",
              "dayofyear",
              "from_days",
              "from_unixtime",
              "hour",
              "minute",
              "month",
              "monthname",
              "now",
              "second",
              "str_to_date",
              "timediff",
              "timestampadd",
              "timestampdiff",
              "to_days",
              "unix_timestamp",
              "utc_timestamp",
              "workofyear",
              "year",
            ],
          },
          {
            title: "地理位置函数",
            directoryPath: "spatial-functions/",
            children: [
              "st_astext",
              "st_circle",
              "st_contains",
              "st_distance_sphere",
              "st_geometryfromtext",
              "st_linefromtext",
              "st_point",
              "st_polygon",
              "st_x",
              "st_y",
            ],
          },
          {
            title: "字符串函数",
            directoryPath: "string-functions/",
            children: [
              "append_trailing_char_if_absent",
              "ascii",
              "char_length",
              "concat",
              "concat_ws",
              "ends_with",
              "find_in_set",
              "get_json_double",
              "get_json_int",
              "get_json_string",
              "group_concat",
              "instr",
              "lcase",
              "left",
              "length",
              "locate",
              "lower",
              "lpad",
              "ltrim",
              "money_format",
              "null_or_empty",
              "regexp_extract",
              "regexp_replace",
              "repeat",
              "right",
              "rpad",
              "split_part",
              "starts_with",
              "strleft",
              "strright",
            ],
          },
          {
            title: "聚合函数",
            directoryPath: "aggregate-functions/",
            children: [
              "avg",
              "bitmap",
              "count",
              "hll_union_agg",
              "max",
              "min",
              "ndv",
              "percentile_approx",
              "stddev",
              "stddev_samp",
              "sum",
              "var_samp",
              "variance",
            ],
          },
          {
            title: "bitmap函数",
            directoryPath: "bitmap-functions/",
            children: [
              "bitmap_and",
              "bitmap_contains",
              "bitmap_empty",
              "bitmap_from_string",
              "bitmap_has_any",
              "bitmap_hash",
              "bitmap_or",
              "bitmap_to_string",
              "to_bitmap",
              "bitmap_intersect",
              "bitmap_union",
            ],
          },
          {
            title: "Hash函数",
            directoryPath: "hash-functions/",
            children: ["murmur_hash3_32"],
          },
          "cast",
        ],
      },
      {
        title: "语法帮助",
        directoryPath: "sql-statements/",
        children: [
          {
            title: "用户账户管理",
            directoryPath: "Account Management/",
            children: [
              "CREATE ROLE",
              "CREATE USER",
              "DROP ROLE",
              "DROP USER",
              "GRANT",
              "REVOKE",
              "SET PASSWORD",
              "SET PROPERTY",
              "SHOW GRANTS",
              "SHOW ROLES",
            ],
          },
          {
            title: "集群管理",
            directoryPath: "Administration/",
            children: [
              "ADMIN CANCEL REPAIR",
              "ADMIN CHECK TABLET",
              "ADMIN REPAIR",
              "ADMIN SET CONFIG",
              "ADMIN SET REPLICA STATUS",
              "ADMIN SHOW CONFIG",
              "ADMIN SHOW REPLICA DISTRIBUTION",
              "ADMIN SHOW REPLICA STATUS",
              "ALTER CLUSTER",
              "ALTER SYSTEM",
              "CANCEL DECOMMISSION",
              "CREATE CLUSTER",
              "CREATE FILE",
              "DROP CLUSTER",
              "DROP FILE",
              "ENTER",
              "INSTALL PLUGIN",
              "LINK DATABASE",
              "MIGRATE DATABASE",
              "SHOW BACKENDS",
              "SHOW BROKER",
              "SHOW FILE",
              "SHOW FRONTENDS",
              "SHOW FULL COLUMNS",
              "SHOW INDEX",
              "SHOW MIGRATIONS",
              "SHOW PLUGINS",
              "SHOW TABLE STATUS",
              "UNINSTALL PLUGIN",
            ],
          },
          {
            title: "DDL",
            directoryPath: "Data Definition/",
            children: [
              "ALTER DATABASE",
              "ALTER TABLE",
              "ALTER VIEW",
              "BACKUP",
              "CANCEL ALTER",
              "CANCEL BACKUP",
              "CANCEL RESTORE",
              "CREATE DATABASE",
              "CREATE INDEX",
              "CREATE MATERIALIZED VIEW",
              "CREATE REPOSITORY",
              "CREATE RESOURCE",
              "CREATE TABLE",
              "CREATE VIEW",
              "create-function",
              "DROP DATABASE",
              "DROP INDEX",
              "DROP MATERIALIZED VIEW",
              "DROP REPOSITORY",
              "DROP RESOURCE",
              "DROP TABLE",
              "DROP VIEW",
              "drop-function",
              "HLL",
              "RECOVER",
              "RESTORE",
              "show-functions",
              "SHOW RESOURCES",
              "TRUNCATE TABLE",
            ],
          },
          {
            title: "DML",
            directoryPath: "Data Manipulation/",
            children: [
              "BROKER LOAD",
              "CANCEL LOAD",
              "DELETE",
              "EXPORT",
              "GROUP BY",
              "insert",
              "LOAD",
              "MINI LOAD",
              "MULTI LOAD",
              "PAUSE ROUTINE LOAD",
              "RESUME ROUTINE LOAD",
              "ROUTINE LOAD",
              "SHOW ALTER",
              "SHOW BACKUP",
              "SHOW DATA",
              "SHOW DATABASES",
              "SHOW DELETE",
              "SHOW DYNAMIC PARTITION TABLES",
              "SHOW EXPORT",
              "SHOW LOAD",
              "SHOW PARTITIONS",
              "SHOW PROPERTY",
              "SHOW REPOSITORIES",
              "SHOW RESTORE",
              "SHOW ROUTINE LOAD",
              "SHOW ROUTINE LOAD TASK",
              "SHOW SNAPSHOT",
              "SHOW TABLES",
              "SHOW TABLET",
              "SHOW TRANSACTION",
              "STOP ROUTINE LOAD",
              "STREAM LOAD",
            ],
          },
          {
            title: "数据类型",
            directoryPath: "Data Types/",
            children: [
              "BIGINT",
              "BOOLEAN",
              "CHAR",
              "DATE",
              "DATETIME",
              "DECIMAL",
              "DOUBLE",
              "FLOAT",
              "HLL",
              "INT",
              "LARGEINT",
              "SMALLINT",
              "TINYINT",
              "VARCHAR",
            ],
          },
          {
            title: "辅助命令",
            directoryPath: "Utility/",
            children: ["DESCRIBE"],
          },
        ],
      },
    ],
  },
  {
    title: "开发者手册",
    directoryPath: "developer-guide/",
    children: [
        "debug-tool",
        "format-code",
        "fe-idea-dev",
        "fe-eclipse-dev"
    ],
  },
  {
    title: "Apache 社区",
    directoryPath: "community/",
    children: [
      "gitter",
      "how-to-contribute",
      "members",
      "pull-request",
      "committer-guide",
      "release-process",
      "subscribe-mail-list",
      "verify-apache-release",
    ],
  },
];
