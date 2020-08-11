# これは
Darknet（YOLO）のROS用ラッパーROSノード

# 概要
Darknet（YOLO）をROSで扱えるようにするラッパーノードである．

RGBDカメラから得られた画像をYOLOで推論し，結果をDarknetWithoutPose型として出力する．
推論は，任意のタイミングでON,OFF可能である．

# Input
## ROSパラメータ
・Darknet コンフィグ
* ROSパラメータ名：`/darknet_ros_wrapper_node/cfg`
* 概要：Darknetの推論用設定ファイル

・Darknet データ
* ROSパラメータ名：`/darknet_ros_wrapper_node/data`
* 概要：Darknetの推論用データファイル

・Darknet 重み
* ROSパラメータ名：`/darknet_ros_wrapper_node/weight`
* 概要：Darknetの推論用重みファイル

・Darknet しきい値（最小）
* ROSパラメータ名：`/darknet_ros_wrapper_node/th`
* 概要：Darknetの推論用しきい値（最小），小さいほど検出数は増えるが精度は落ちる
* 値域：0.0 ~ 1.0

・Darknet しきい値（最大）
* ROSパラメータ名：`/darknet_ros_wrapper_node/hier_th`
* 概要：Darknetの推論用しきい値（最大），特に意味ない（1.0で良い，たぶん）
* 値域：0.0 ~ 1.0

・Darknet NMS
* ROSパラメータ名：`/darknet_ros_wrapper_node/nms`
* 概要：Darknetの推論用NMS，小さいほどバウンディングボックスの重なりが増えるが，処理は重くなる
* 値域：0.0 ~ 1.0（要調査）

・特定IDのみ推論
* ROSパラメータ名：`/darknet_ros_wrapper_node/specific_id`
* 概要：特定IDのみ推論結果として出力するためのパラメータ
* 例：specific_id = person　（personクラスのみ出力される）

## Subscriber
・run_enable
* トピック名：`/darknet_ros_wrapper_node/run_enable`
* 型：std_msgs/Bool
* 概要：推論のON/OFFを切り替える，TrueのときON

・smi_rgbd_rgb 
* トピック名：RGBDカメラのRGB画像トピック（robot_pkgs/hma_hsr_pkg/io/config/descriptor.csv参照）
* 型：sensor_msgs/Image
* 概要：RGBDカメラのRGB画像を取得する

・smi_rgbd_depth
* トピック名：RGBDカメラのDepth画像トピック（robot_pkgs/hma_hsr_pkg/io/config/descriptor.csv参照）
* 型：sensor_msgs/Image
* 概要：RGBDカメラのDepth画像を取得する


# Output
## Publisher
・darknet_without_pose
* トピック名：`/darknet_ros_wrapper_node/darknet_without_pose`
* 型：hma_msgs/DarknetWithoutPose
* 概要：推論結果をDarknetWithoutPose型として出力する

・smi_dbg
* トピック名：`/darknet_ros_wrapper_node/dbg`
* 型：sensor_msgs/Image
* 概要：推論結果をImage型として出力する（結果確認用）

# グローバルパラメータ
・GP_LOOP_RATE
* 処理周期を設定
* Default: 30 [Hz]

・GP_CFG
* Darknet コンフィグ
* Default: yolov3.cfg

・GP_DATA
* Darknet データ
* Default: coco.data

・GP_WEIGHT
* Darknet 重み
* Default: yolov3.weights

・GP_TH
* Darknet しきい値（最小）
* Default: 0.1

・GP_HIER_TH
* Darknet しきい値（最大）
* Default: 1.0

・GP_NMS
* Darknet NMS
* Default: 0.1